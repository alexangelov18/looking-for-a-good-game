import mongoose from 'mongoose';

const lolPlayerSchema = mongoose.Schema({
    summonerName: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: Number,
        required: true
    },
    rank: {
        tier: {
          type: String,
          enum: ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster', 'Challenger']
        },
        division: {
          type: Number,
          min: 1,
          max: 4
        }
    },
    champions: [{
       championId: {
         type: Number,
         required: true
       },
       masteryLevel: {
         type: Number,
         required: true
       },
       masteryPoints: {
         type: Number,
         required: true
       }
    }],
    matchHistory: [{
        gameId: {
          type: Number,
          required: true
        },
        gameMode: {
          type: String,
          required: true
        },
        championId: {
          type: Number,
          required: true
        },
        result: {
          type: String,
          enum: ['Win', 'Loss'],
          required: true
        }
    }],
    winLossRatio: Number,
    region: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    willPlayOn: {
        type: String,
        match: /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, // Using regex pattern to validate the time format
        default: '00:00'
      }
});

const LolPlayerProfile = mongoose.model('LolPlayerProfile', lolPlayerSchema);

export default LolPlayerProfile;