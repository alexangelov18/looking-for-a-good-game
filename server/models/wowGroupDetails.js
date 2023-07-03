import mongoose from 'mongoose';

const wowGroupSchema = mongoose.Schema({

});

const WowGroupDetails = mongoose.model('WowGroupDetails', WowGroupSchema);

export default WowGroupDetails;