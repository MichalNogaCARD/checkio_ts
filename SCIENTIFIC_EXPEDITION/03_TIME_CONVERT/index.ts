export module TimeConverter {
    export function timeConverter(dayTime) {
        let time: string = dayTime.toString().match(/^(?<hour>\d{2}):(?<minute>\d{2})$/).groups;
        return `${time.hour.substring(0, 1) === '0' ? time.hour.substring(1, 2) : time.hour > 12 ? time.hour - 12 : time.hour}:${time.minute} ${time.hour >= 12 ? 'p.m.' : 'a.m.'}`;
    }

}
