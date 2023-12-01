export interface Conversation {
    prompt: string,
    response: string[],
    // Max of four
    options?: Conversation[],
    // End of a conversation, key to track if this conversation has been found.
    finishId?: number,
    secretId?: number,
    eyeOpener?: string,
}