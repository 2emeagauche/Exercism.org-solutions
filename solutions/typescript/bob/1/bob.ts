type InteractionPatternType = {
    pattern: RegExp,
    response: string
}
type InteractionType = {
    [key: string]: InteractionPatternType
}

const interactions: InteractionType = {
    question: {
        //pattern: /^(?=.*[a-z]).+\?\s*$/,
        pattern: /^(?=.*[a-z0-9]).+\?\s*$/,
        response: "Sure."
    },
    yelling: {
        //pattern: /^[A-Z0-9,\s]+[^?]$|^[A-Z0-9]$/,
        pattern: /^[^a-z?]*[A-Z][^a-z?]*\s*$/,
        response: "Whoa, chill out!"
    },
    yellingQuestion: {
        pattern: /^[A-Z\s]+\?$/,
        response: "Calm down, I know what I'm doing!"
    },
    silence: {
        pattern: /^\s*$/,
        response: "Fine. Be that way!",
    },
}

export function hey(message: string): string {
    if(interactions.question.pattern.test(message)) {
        return interactions.question.response
    }
    if(interactions.yelling.pattern.test(message)) {
        return interactions.yelling.response
    }
    if(interactions.yellingQuestion.pattern.test(message)) {
        return interactions.yellingQuestion.response
    }
    if(interactions.silence.pattern.test(message)) {
        return interactions.silence.response
    }
    return "Whatever."
}