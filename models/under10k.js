const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

const under10kSchema = new Schema(
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

const under10k = mongoose.models.under10k || mongoose.model("under10k", under10kSchema);

module.exports = under10k


