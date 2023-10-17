export interface Conversation {
    prompt: string[],
    response: string[],
    options: Conversation[],
}