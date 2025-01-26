import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function categorizeBookmark(title: string, url: string): Promise<string> {
  const prompt = `Given the following bookmark title and URL, categorize it into one of these categories: Work, Personal, Learning, Entertainment.

Title: ${title}
URL: ${url}

Please respond with only the category name.`

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 10,
  })

  const category = response.choices[0].message.content?.trim() || "Uncategorized"
  return category
}

