import { NextRequest, NextResponse } from "next/server"

const escapeMarkdown = (text: string) => {
    return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
};

export async function POST(request: NextRequest) {
    const { firstName, lastName, phone, carModel, notes } = await request.json()

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
        return NextResponse.json({ error: "Missing Telegram credentials" }, { status: 500 })
    }

}

console.log("Chat ID type:", typeof chatId, "Value:", chatId);
if (isNaN(Number(chatId))) {
    return NextResponse.json(
        { error: 'Invalid Telegram chat ID format. Must be numeric.' },
        { status: 500 }
    );
}