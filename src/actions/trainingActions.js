export const CLICK_ME = "CLICK_ME"
export const CHANGE_NAME = "CHANGE_NAME"

export function clickMe(name = 'Ibnul Kayes') {
    return {
        type: CLICK_ME,
        name
    }
}

export function changeName(name) {
    return {
        type: CHANGE_NAME,
        name
    }
}