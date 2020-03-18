let Bio1 = (`Hi I'm ${suspect1}, I couldn't have murdered deadBody as I was in the pub from 5pm.`)
let Bio2 = (`Hi I'm ${suspect2}, I was working late all night in the office. I didn't see anything.`)
let Bio3 = (`Hi I'm ${suspect3}, I saw deadBody as I left the office at 6pm.`)
let Bio4 = (``)

let arraychoice = [
    suspect1, suspect2, suspect3, suspect4
]

const chosen = () => {
    let chosen = prompt(`Who do you want to talk to first ${arraychoice}`)
    if (arraychoice.toLowercase() == suspect1) {
        delete arraychoice(0)
        alert(`${Bio1}`)
    } else {
        if (arraychoice.toLowercase() == suspect2) {
            delete arraychoice(1)
            alert(`${Bio2}`)
        }
    }


}
