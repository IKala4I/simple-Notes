export const createTodayDate = () => {
    const today = new Date()

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    return `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`
}