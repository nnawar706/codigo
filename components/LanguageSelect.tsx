import React, { ChangeEvent } from 'react'

import { languageOptions } from "@/constants/languages"
import { Language } from "@/types/General"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

const LanguageSelect = ({ onSelectChange }: { onSelectChange: any }) => {
    return (
        <Select defaultValue="63" 
        onValueChange={(selected) => onSelectChange(selected)}>
            <SelectTrigger>
                <SelectValue placeholder="Select a Language">
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    {languageOptions.map((language: Language) => {
                        return <SelectItem 
                            key={language.id} 
                            value={language.id.toString()}>
                                {language.name}
                            </SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default LanguageSelect