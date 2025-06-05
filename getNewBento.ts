const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Dimas%20Fajar&g=SideeID&x=&l=sideid&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F132200554%3Fv%3D4&p=https%3A%2F%2Fside.my.id&z=7f1a7";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
