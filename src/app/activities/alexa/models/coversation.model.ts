export interface Conversation {
    prompt: string,
    response: string[],
    // Max of four
    options?: Conversation[],
    // End of a conversation, key to track if this has been found.
    finishId?: number,
    secretId?: number,
}