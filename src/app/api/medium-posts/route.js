export async function GET() {
  const postSlugs = [
    "i-passed-the-oscp-on-my-first-attempt-24882ce506a3",
    "flu-proving-grounds-walkthrough-932250fecc69",
    "mzeeav-pg-walkthrough-b086b9cb9c7f",
  ];

  try {
    // Use RSS feed converted to JSON - more reliable than direct JSON API
    const rssUrl = "https://medium.com/feed/@vladimircuc007";
    const rss2JsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    const response = await fetch(rss2JsonUrl);
    const data = await response.json();
    
    if (!data.items || !Array.isArray(data.items)) {
      console.error("Invalid RSS data structure:", data);
      return Response.json([], { status: 500 });
    }

    // Match posts by slug in the link
    const results = postSlugs.map((slug) => {
      const post = data.items.find(item => 
        item.link && item.link.includes(slug)
      );

      if (post) {
        // Extract image from content HTML or use thumbnail
        let imageUrl = "";
        
        // Try thumbnail first
        if (post.thumbnail) {
          imageUrl = post.thumbnail;
        }
        
        // Extract first image from content if no thumbnail
        if (!imageUrl && post.content) {
          const imgMatch = post.content.match(/<img[^>]+src="([^"]+)"/i);
          if (imgMatch && imgMatch[1]) {
            imageUrl = imgMatch[1];
          }
        }
        
        // Extract subtitle from description (strip HTML and ensure it ends with ... at complete word)
        let subtitle = "";
        if (post.description) {
          const cleanDesc = post.description.replace(/<[^>]*>/g, '').trim();
          const maxLength = 200;
          
          if (cleanDesc.length > maxLength) {
            // Find the last complete word before maxLength
            let truncated = cleanDesc.substring(0, maxLength);
            const lastSpace = truncated.lastIndexOf(' ');
            
            // If we found a space, cut at that space; otherwise cut at maxLength
            if (lastSpace > 0 && lastSpace > maxLength - 50) {
              // Only use the space if it's not too far from the end
              subtitle = truncated.substring(0, lastSpace).trim() + '...';
            } else {
              // If no good space found, find the last space in a reasonable range
              const searchStart = Math.max(0, maxLength - 30);
              const searchEnd = maxLength;
              const betterSpace = cleanDesc.lastIndexOf(' ', searchEnd);
              if (betterSpace > searchStart) {
                subtitle = cleanDesc.substring(0, betterSpace).trim() + '...';
              } else {
                subtitle = truncated.trim() + '...';
              }
            }
          } else {
            subtitle = cleanDesc;
          }
        }

        return {
          title: post.title || "",
          subtitle: subtitle,
          image: imageUrl || "",
          readingTime: "",
        };
      }

      return null;
    }).filter(r => r !== null);

    return Response.json(results);
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return Response.json([], { status: 500 });
  }
}
