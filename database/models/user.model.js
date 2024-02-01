import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
    wishList: [
      {
        type: Schema.Types.ObjectId,
        ref: "product"
      }
    ],
    addresses: [
      {
        city: String,
        street: String,
        phone: String
      }
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    passwordChangedAt: {
      type: Date
    },
    blocked: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, +process.env.SALT_ROUND);
  console.log(this)
})
userSchema.pre('findOneAndUpdate', function () {
  if (this._update.password) this._update.password = bcrypt.hashSync(this._update.password, +process.env.SALT_ROUND);
})


export const userModel = mongoose.model("user", userSchema);
