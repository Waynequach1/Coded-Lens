export interface Question {
    question: string;
    possible_answers: string[];
    // integer which represents one of the possible answers
    correct_response: number;
}