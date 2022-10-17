export default class Events {
    eventsRef = db.collection("events");
    async getAll() {
        const events = [];
        try {
            const snapshot = await this.eventsRef.get();
            snapshot.forEach(doc => events.push({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.log('Error : ', error);
        }
        return events;
    }
}