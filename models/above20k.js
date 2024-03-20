const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

const above20kSchema = new Schema(
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

const above20k = mongoose.models.above20k || mongoose.model("above20k", above20kSchema);

module.exports = above20k;


