
import { type NextRequest } from "next/server";
const api_endpoint = process.env.CONTOSO_CHAT_ENDPOINT!;
const api_key = process.env.CONTOSO_CHAT_KEY!;

export async function POST(req: NextRequest) {
  const { question, customerId, chat_history } = await req.json();

  const headers = {
    "Content-Type": "application/json",
    //Authorization: "Bearer " + api_key,
    Authorization: "None",
  };

  const url = new URL(api_endpoint);
  url.searchParams.append("question", question);
  url.searchParams.append("customer_id", customerId);
  url.searchParams.append("chat_history", JSON.stringify(chat_history));

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: headers,
  });

  const data = await response.json();

  return Response.json(data);
}
