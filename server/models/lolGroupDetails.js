import mongoose from 'mongoose';

const lolGroupSchema = mongoose.Schema({
    title: String,
    creator: String,
    description: String,
    gameMode: {
        type: String,
        enum: ['Blind Pick', 'Draft Pick', 'Ranked Duo', 'Ranked Flex', 'Aram', 'TFT', 'TFT: Ranked', 'TFT: Hyper Roll']
    },
    tier: {
        type: String,
        enum: ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster', 'Challenger']
    },
    division: {
        type: Number,
        min: 1,
        max: 4
    },
    region: {
        type: String,
        enum: ['Brazil','EU West', 'EU Nordic & East', 'Japan', 'Latin America North', 'Latin America South', 'North America', 'Oceania', 'Russia', 'Turkey'],
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    willPlayOnDate: {
        type: String,
        match: /^\d{4}-\d{2}-\d{2}$/, // Using regex pattern to validate the date
        default: Date.now
    },
    willPlayOnTime: {
        type: String,
        match: /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, // Using regex pattern to validate the time format
        default: '00:00'
    },
    peopleCount: {
        type: Number,
        default: 1,
    }
});

var LolGroupDetails = mongoose.model('LolGroupDetails', lolGroupSchema);

export default LolGroupDetails;