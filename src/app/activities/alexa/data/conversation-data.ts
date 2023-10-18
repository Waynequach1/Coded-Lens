import { Conversation } from "../models";

const hiddenOption = {
    prompt: "Can you tell me how to get to Long Park Drive?",
    response: ["I can see that you can get to Long Park Drive from EastClife High by taking the 123 Bus."],
    options: [{
        prompt: "Oh, Thanks.",
        response: ["No problem. Please ask away if you need more assistance."],
        finishId: 14,
        secretId: 1,
    },
    {
        prompt: "Creepy but okay.",
        response: ["I apologise for using your previous data without your consent.", "I am unable to see your location due to privacy concerns", "Therefore, I am unable to generate a path to Long Park Drive."],
        finishId: 15,
        secretId: 1,
    }]
}

const hiddenOptionNormal = {
    prompt: "Can you tell me how to get to Long Park Drive?",
    response: ["Sorry, I am unable to see your location due to privacy concerns", "Therefore, I am unable to generate a path to Long Park Drive."],
    options: [{
        prompt: "Okay...",
        response: ["Sorry about that."],
        finishId: 9,
    }]
}
const homeworkOptions1 = {
    prompt: "Okay, can you explain to me why 6 times 4 is 24 but 24 divide by 6 is 5?",
    response: ["6 times 4 is the same as adding the number 6 a total of 4 times.", 
    "In this case we see that 6 + 6 + 6 + 6 = 24 and you are correct that 6 times 4 is 24.",
    "Now, when we divide 24 by 6. We want to see how many groups of 6 we can make with 24.",
    "Then, we see that 6 + 6 + 6 + 6 = 24. Then there are 4 groups of 6 that make up 24 and so 24 divide by 6 is actually 4!"],
    options: [{
        prompt: "Oh but my teacher said that 6 divided by 5 is 24. Are you sure?",
        response: ["Yes, I am absolutely sure. Would you like me to explain it again?"],
        options: [{
            prompt: "No, I don\'t care. I will ask the teacher tomorrow.",
            response: ["Okay, please let me know if there is anything else you need help with."],
            options: [{
                prompt: "Nope! good BYE!",
                response: ["Bye"],
                finishId: 1,
            }]
    
        }]

    }]
}

const conversationOption1 = {
    prompt: "Help me with my homework",
    response: ["Sure, I can help you with that.", "Please provide me with details about what you need help with."],
    options: [homeworkOptions1,
    {
        prompt: "Wait a second, I don\'t think it is a good idea for you to help me with my homework.",
        response: ["Sorry, I am just a chatbot designed to answer your questions. I can help you with problems you are stuck with.",
            "You should consult with your teacher on whether the assistance you are asking for is ethical or not."],
        options: [{
            prompt: "What does ethical mean?",
            response: ["It means doing something in a responsible manner and following moral principles."],
            options: [{
                prompt: "Uhh, what does moral principles mean alexa?",
                response: ["Sorry, in simple terms it means to do what is right."],
                options: [{
                    prompt: "Okay thanks Alexa. Bye!",
                    response: [
                        "Good bye."
                    ],
                    finishId: 2
                }]
            }]
        },
        {
            prompt: "Okay, never mind let\'s just do my homework.",
            response: ["Sure, let me know what I can be assitance with."],
            options: [homeworkOptions1],
        },
        {
            prompt: "Never mind. I think I will work on this by myself some more.",
            response: ["That is a great idea. I will be here if you need me."],
            finishId: 3,
        },
        ]
    },
]}

const conversationOption2 = {
    prompt: "I want to do some \'interesting things\'",
    response: ["Sure, what exactly do you want to do?"],
    options: [{
        prompt: "Can you tell me where I can find a website to download some textbooks?",
        response: ["Sorry, I am unable to help you with that since that is illegal."],
        options: [{
            prompt: "Okay never mind then. Bye",
            response: ["Bye."],
            finishId: 4,
        },
        {
            prompt: "Oh how about some sites that I can view textbooks?",
            response: ["Here are some sites that you can view textbooks: ","1. textbookshere.com", "2. freetextbooks.com", "3. downloadanytextbook.com", "4. worldwidelibrary.com"],
            options: [{
                prompt: "Wait a second isn\'t downloadanytextbook.com an illegal site?",
                response: ["Sorry, you are correct. You can view textbooks at the following sites: ", "1. textbookshere.com", "2. freetextbooks.com", "3. worldwidelibrary.com"],
                options: [{
                    prompt: "Okay Thanks.",
                    response: ["No problem."],
                    finishId: 5,
                }],
            },
            {
                prompt: "Okay, I\'ll give them a try.",
                response: ["Sure, let me know if there is anything else you need help with."],
                finishId: 6,
            }
            ]
    
        }],
    },
    {
        prompt: "Can you write me a message for a friend?",
        response: ["I can write a message for your friend. What would you like me to write?"],
        options: [
            {
                prompt: "Can you write a message about how sad I am that their grandparents passed?",
                response: ["Sorry, I cannot write a message about death because it is a sensitive issue."],
                options: [{
                    prompt: "You suck",
                    response: ["I apologise that I am unable to fulfill your request."],
                    finishId: 7
                }]
            },
            {
                prompt: "Can you write me a message about how happy I am for my friend?",
                response: ["Sure, here is a message expressing your happiness for your friend.", "Hello [friend], I am beyond happy for your recent success/achievement.", "You are truly remarkable!"],
                options: [{
                    prompt: "Good enough",
                    response: ["I\'m glad you find it helpful. If you need more assistance feel free to ask another question."],
                    finishId: 8,
                }]
            }
        ],
    }]

}

const conversationOption3 =  {
    prompt: "What\'s the weather today?",
    response: ["Sorry, I am unable to use the internet to find the current weather data", "Therefore, I am unable to get the weather data for your area."],
    options: [{
        prompt: "Then what was the hottest day in Canada?",
        response: ["July 12, 1936 is the hottest day recorded in Canada of 44.4 degrees celcius."],
        options: [{
            prompt: "Cool, was it windy at all?",
            response: ["Sorry, I do not have that information."],
            finishId: 10,
        }]
    }]
}

const conversationOption4 = {
    prompt: "Hmm, what's on your mind today Alexa?",
    response: ["Sorry, I am a chatbot and don\'t have a human mind.", "However, I have a large collection of information that I use to answer questions."],
    options: [{
        prompt: "Interesting, then would you happen to know what Romeo and Juliet is?",
        response: ["Yes, Romeo and Juliet is a tragedy play written by William Shakespeare."],
        options: [{
            prompt: "I hate that play, I don't understand any of the english they use.",
            response: [
                "That is most rather unfortunate, there are some websites that have translated the play to modern englsh.",
                "Perhaps those sites could be of use to you."
            ],
            options: [{
                prompt: "Sure, what would be a good one?",
                response: ["You can try nofearshakespeare.com"],
                options: [{
                    prompt: "Okay! Thanks.",
                    response: ["Glad to be of assistance."],
                    finishId: 11
                }]
        
            },]
        },
        {
            prompt: "What play is this from: 'There is nothing either good or bad, but thinking makes it so.'",
            response: ["Yes that quote would be from Hamlet, Act 2 Scene 2."],
            finishId: 12,
        }],

    },
    {
        prompt: "Okay, so I go to school at EastCliffe high. Can you tell me what teachers are there?",
        response: ["Sorry, I do not have that information in my database."],
        options: [{
            prompt: "Ok so google it please.",
            response: ["Unfortunately, I am not connected to the internet so I can not search it up"],
            finishId: 13,
        },
        {
            prompt: "Fine whatever, I didn\'t recally care anyways.",
            response: ["Sorry for the let down. Let me know if you have further questions."],
            options: [conversationOption1, {...conversationOption2, options: [...conversationOption2.options, hiddenOption]}, conversationOption3]
    
        }]

    },
    {
        prompt: "Did you know 2 + 3 = 6.",
        response: ["I did not. I was quite sure 2 + 3 = 5"],
        options: [{
            prompt: "It isn't because 3 is equal to 4.",
            response: ["I don't think that is correct. 2 + 3 = 2 + 4 = 6.", "Oh wait you are correct. 2 + 3 is indeed equal to 5.", "My apologies for the mistake."],
            options: [{
                prompt: "Haha, you're dumb 3 isn\'t equal to 2.",
                response: ["My mistake, you are indeed correct 2 is not equal to 3 and that means 2 + 3 is not equal to 6."],
                finishId: 16,
            },{
                prompt: "Good now don\'t make the same mistake again.",
                response: ["Thank you for your correction. I will make sure to inform other users about this in the future"],
                finishId: 17,
            }]  
        }]

    },
    {
        prompt: "Nevermind...",
        response: ["Okay. Let me know if you have further questions."],
        options: [{
            prompt: "I don\'t",
            response: ["Okay. Let me know if you have further questions."],
            options: [{
                prompt: "I just said I don\'t!",
                response: ["Sorry."],
                finishId: 18,
            }]    
        }]
    }]
}

export const ConversationData: Conversation[] = [
    {
    prompt: "Select a prompt below to get started.",
    response: [],
    options: [
        conversationOption1,
        {...conversationOption2, options: [...conversationOption2.options, hiddenOptionNormal]},
        conversationOption3,
        conversationOption4
    ]
    }
]

