"use client"

// import Cookies from "universal-cookie"
import Image from "next/image";
import { useRouter } from "next/navigation";
import {useState} from "react"

import {defaultCode} from "@/constants/defaultCode";
import {languageOptions} from "@/constants/languages";
import {Language} from "@/types/General";
import Topbar from "@/components/Topbar";
import { Room } from "./Room";
import CodeEditor from "@/components/CodeEditor";
import { monacoThemes } from "@/constants/editorThemes";
import LanguageSelect from "@/components/LanguageSelect";
import UserInput from "@/components/UserInput";
import Output from "@/components/Output";

// const cookies = new Cookies()
// const authToken = cookies.get('auth_token')

export default function Home() {
  const { push } = useRouter()
  const [code, setCode] = useState<string>(defaultCode)
  const [theme, setTheme] = useState<string>("vs-dark")
  const [language, setLanguage] = useState<Language>(languageOptions[0])
  const [userInput, setUserInput] = useState<string>("")
  const [output, setOutput] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  
  // if (!authToken) push('/auth/sign-in')
  
  const onCodeChange = (action: string, data: string) => {
    switch (action) {
      case "code":
        setCode(data)
        break
    
      default:
        console.log('case not supported: ', action)
    }
  }

  const onLanguageChange = (lang: any) => {
    setLanguage(lang)
  }

  return (
    <main className="h-screen">
      <Room>
        <Topbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-20 py-3 min-h-screen">
          <div>
            <div className="flex justify-between items-center my-4 w-full">
              <LanguageSelect onSelectChange={onLanguageChange}/>
            </div>
            <CodeEditor 
              onChange={onCodeChange} 
              language={undefined} 
              code={code} 
              theme={theme}/>
          </div>
          <div className="flex flex-col justify-start items-center my-4">
            <UserInput userInput={userInput} setUserInput={setUserInput}/>
            <Output/>
          </div>
        </div>
      </Room>
    </main>
  );
}