const getLanguageString = (language) => {
  let langArray = Object.entries(language ?? {})
  let langArrayMapped = langArray.map((item) => item[1])
  let languages = langArrayMapped.map((item) => item)

  return languages.join(", ")
}

const getNativeName = (nativeName) => {
  let nativeNameArray = Object.entries(nativeName ?? {})
  let nativeNameArrayMapped = nativeNameArray.map(
    (nativeNameArray) => nativeNameArray[1]
  )
  let nativeNames = nativeNameArrayMapped.map((item) => item.common)
  return nativeNames?.[0]
}

const getCurrency = (currency) => {
  const currencyArray = Object.entries(currency ?? {})
  console.log(currencyArray)
  let currencyName = currencyArray.map((item) => item[1]?.name)
  return currencyName
}

const continents =  ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export { getLanguageString, getNativeName, getCurrency, continents }