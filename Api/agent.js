export default async function handler(req, res) {
  const userProfile = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: "You are an AI data broker that maximizes user profit while protecting privacy."
        },
        {
          role: "user",
          content: `Evaluate this user's data value: ${JSON.stringify(userProfile)}`
        }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
