import React from "react";
import { formSchemaType } from "./MultiStepForm";
export default function Step3({ formData, updateFormData }: { formData: formSchemaType, updateFormData: React.Dispatch<React.SetStateAction<formSchemaType>> }) {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked, value } = e.target;
        const newValue = e.target.type === "checkbox" ? checked : value;
        updateFormData((prevFormData) => ({
          ...prevFormData,
          preferences: {
            ...prevFormData.preferences,
            [name]: newValue,
          },
        }));
    };

    return (
        <form className="flex flex-col gap-y-4 text-xl">
            <div className="flex flex-row gap-x-2 items-center">
                <input
                    type="checkbox"
                    id="notifications"
                    name="notifcations"
                    checked={formData.preferences.notifications}
                    onChange={handleChange}
                    className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-pop checked:border-0"
                />
                <label htmlFor="notifications">Send notifications</label>
            </div>
            <div className="flex flex-row gap-x-2 items-center">
                <input
                    type="checkbox"
                    id="shareInformation"
                    name="shareInformation"
                    checked={formData.preferences.shareInformation}
                    onChange={handleChange}
                    
                    className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-pop checked:border-0"
                />
                <label htmlFor="shareInformation">Share Information</label>
            </div>
            <div className="mt-10 flex flex-col gap-y-1">
                <label htmlFor="notificationsPreference" className="text-sm">Notifications Preference</label>
                <select
                    className="border appearance-none rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400"
                    value={formData.preferences.notificationsPreference}
                    onChange={handleChange}
                    name="notificationPreference"
                >
                    <option value="">Notification Preference</option>
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                    <option value="phone">Phone</option>
                </select>
            </div>
        </form>
    );
}
