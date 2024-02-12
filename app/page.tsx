"use client"

import { PersonIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Grid, TextField } from "@radix-ui/themes";
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

  const onLanguageChange = (lang) => {
    console.log('selected lang', lang)
    setLanguage(lang)
  }

  return (
    <main className="overflow-hidden h-screen">
      <Room>
        <Topbar/>
        <Grid columns={{ sm:"1", md:"2" }} gap="3" className="px-20 py-3">
          <Box>
            <Flex justify="between" align="center">
              <LanguageSelect onSelectChange={onLanguageChange}/>
            </Flex>
            <CodeEditor 
            onChange={onCodeChange} 
            language={undefined} 
            code={code} 
            theme={theme}/>
          </Box>
        </Grid>
      </Room>
    </main>
  );
}