const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

const bet10kto15kSchema = new Schema(
{
MobileName:String,
imgUrl:String,
VariantAndPrices:[String],
featuresUrl:String

},
{
timestamps: true,
}
);

const bet10kto15k = mongoose.models.bet10kto15k || mongoose.model("bet10kto15k", bet10kto15kSchema);

module.exports =bet10kto15k;


