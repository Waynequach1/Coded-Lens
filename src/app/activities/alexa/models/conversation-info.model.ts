import { AlexaInfo } from "../../../services/activity-watcher/models";

export interface ConversationInfo {
    information: AlexaInfo
    // How fast we should mimic typing based on user preference.
    textAnimate: boolean; // -1 means instant
}