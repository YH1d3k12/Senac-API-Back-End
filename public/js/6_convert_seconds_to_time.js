function ConvertSecondsToTime(seconds)
{
    if (!isNaN(seconds))
    {
        let hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;

        let minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        
        return `${hours} Hour(s) ${minutes} Minute(s) ${seconds} Second(s)`;
    }
}

module.exports = { ConvertSecondsToTime };