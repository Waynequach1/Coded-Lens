import { TechnologyInfo } from "../models";

export const technologyExplanations: TechnologyInfo[] = [
    {
        technology: "Soap dispensers",
        body: "One of the most commonly overlooked biases in technology is soap dispensers. They exist everywhere and yet for a minority of people automatic soap dispensers don't work. This is because automatic soap dispensers rely on infrared energy which gets absorbed more in darker skinned people. This results in machine not being able to pick up enough infrared energy to dispense the soap."
    },
    {
        technology: "Facial Recognition",
        body: "Another super popular bias in technology is facial recognition. Many countries have already started enforcing use of this technology in widespread areas from simple beauty apps to use in security or even the surveillance of individuals. The major concern however is that facial recognition is inherently biased. These technologies use machine learning to teach an ai using large data sets however these data sets are usually dominated by a white male sample size. As such people of color and woman often get higher inaccuracies when using these technologies due to the lack of training data. Further, the cross section of these minorities suffer most from this biased dataset with substantially higher inaccuracies then white males."
    },
    {
        technology: "Algorithms For Determining Employment",
        body: "Many companies have started using algorithms for filtering potential employees. This is related to reducing hiring costs and saving time on the company's end. However, many of these algorithms contain potential biases. One example is amazon's hiring algorithm which learned based on successful applicants that female employees have less sustainability and in turn automatically declined every woman that applied. Other algorithms score individuals of certain personalities better and account for disabilities.",
    },
    {
        technology: "Chat Bots",
        body: "Chat bots that are designed simply for interacting with users and performing basic commands have biases too. Inherently, the developers of these chat bots are trained on biased data similarly to facial recognition algorithms. As such, these chat bots have limited capability when interacting with individuals outside of the majority group (white males) and aren\'t capable of understanding minority groups use of English (aka African-American Vernacular English or AAVE). Voice based chat bots also show similar difficulty understanding accents of many minoritiy groups.",
    },
    {
        technology: "Crime Watch Algorithms",
        body: "What better way is there to arrest criminals than to capture them the moment they act?  Crime watch algorithms were designed for this purpose. Making use of incarceration rates and neighborhood risk assessments, these algorithms attempt to predict where future crime will occur. However, these algorithms tend to target minority neighborhoods in America due to the massive unbalance of racial incarcerations in America (With a massive majority being of darker skin color).",
    },
]