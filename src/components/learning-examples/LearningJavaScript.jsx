const person = {
    name: 'kaiqi is the best',
    address: {
        line1: 'Baker Street',
        city: 'London',
        country: 'UK',
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    },
}


export default function LearningJavaScript() {
    return (
        <div>
        <div>{person.name}</div>
        <div>address: {person.address.line1}, {person.address.city}, {person.address.country}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </div>
    )
}