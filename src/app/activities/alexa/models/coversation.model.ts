export interface Conversation {
    prompt: string,
    response: string[],
    // Max of four
    options?: Conversation[],
}