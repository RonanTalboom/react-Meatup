import {Appointment} from '../constants/Appointment'
import { 
    ListView,
} from 'react-native';
//temp
const time = Date.parse(new Date());
let date = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};

export const getAppointment = () => {
    //make api calls
    let data = [];
    for (var i = 0; i < 10; i++) {
        let Appointment = {
            ID: '',
            Owner: '',
            Location: '',
            Activity: '',
            StartTime: 0,
            EndTime: 0,
        }
        Appointment.ID = i;
        Appointment.Owner = 'User ' + i;
        Appointment.Location = 'Leiden';
        Appointment.Activity = 'Boodschappen' + (i * 5);
        // Appointment.StartTime =  this._getStartTime();
        // Appointment.EndTime = this._getEndTime();
        data.push(Appointment);
    } 
    return data;

};
_getStartTime = () => {
    const time = Date.parse(new Date());
    return this._convertTime(time)
}
_getEndTime = () => {
    const time = Date.parse(new Date());
    return this._convertTime(time)
}
_convertTime = (time) =>{

    date.seconds = Math.floor((time/1000) % 60);
    date.minutes = Math.floor((time/1000/60) % 60);
    date.hours = Math.floor(time/(1000*60*60) % 24);
    date.days = Math.floor(time/(1000*60*60*24));
    return date
}


