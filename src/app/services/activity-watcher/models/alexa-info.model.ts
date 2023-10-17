// Localized Session Data which resets on site redirect or refresh.
// Not worth using cookies/local storage for this temporary application
export interface AlexaInfo {
    foundConversations: number;
    totalConversations: number;
    foundSecrets: number;
    totalSecrets: number;
}