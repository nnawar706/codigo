"use client"

// import Cookies from "universal-cookie"
import { useRouter } from "next/navigation";
import {useState} from "react"

import {languageOptions} from "@/constants/languages";
import {OutputInfo} from "@/types/General";
import Topbar from "@/components/Topbar";
import { Room } from "./Room";
import CodeEditor from "@/components/CodeEditor";
import LanguageSelect from "@/components/LanguageSelect";
import UserInput from "@/components/UserInput";
import Output from "@/components/Output";
import { Button } from "@/components/ui/button";
import OutputDetail from "@/components/OutputDetail";

// const cookies = new Cookies()
// const authToken = cookies.get('auth_token')

export default function Home() {
  const { push } = useRouter()
  const [code, setCode] = useState<string>("")
  const [theme, setTheme] = useState<string>("vs-dark")
  const [language, setLanguage] = useState<number>(languageOptions[0].id)
  const [userInput, setUserInput] = useState<string>("")
  const [output, setOutput] = useState<OutputInfo | null>(null)
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

  const onLanguageChange = (languageId: string) => {

    console.log(parseInt(languageId))
    setLanguage(parseInt(languageId))
  }

  const handleCompile = () => {
    setLoading(true)

    const payload = {
      language_id: language,
      // encode source code in Base64
      source_code: btoa(code),
      stdin: btoa(userInput)
    }
  }

  return (
    <main className="min-h-full">
      <Room>
        <Topbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-20 py-3">
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
            <Button className="w-full my-8" disabled={code === ""} onClick={handleCompile}>
              {loading ? "Processing..." : "Compile & Execute"}
            </Button>
            <Output outputInfo={output!}/>
            {output && <OutputDetail detail={output}/>}
          </div>
        </div>
      </Room>
    </main>
  );
}