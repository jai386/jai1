import React from 'react';
import Autosuggest from 'react-autosuggest';
import './nev1.css'

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  },
  {
    name: 'A# .NET',
    year:0
  },
  {
    name: 'A++',
    year:0
  },
  {
    name: 'B',
    year:0
  },
  {
    name: 'BCPL',
    year:0
  },
  {
    name: 'BASIC',
    year:0
  },
  {
    name: 'D',
    year:0
  },
  {
    name: 'DASL',
    year:0
  },
  {
    name: 'E',
    year:0
  },
  {
    name: 'ET',
    year:0
  },
  {
    name: 'ELAN',
    year:0
  },
  {
    name: 'F',
    year:0
  },
  {
    name: 'F#',
    year:0
  },
  {
    name: 'FOCAL',
    year:0
  },
  {
    name: 'F-Script',
    year:0
  },
  {
    name: 'Game Maker Language',
    year:0
  },
  {
    name: 'G',
    year:0
  },
  {
    name: 'GAP',
    year:0
  },
  {
    name: 'Hack',
    year:0
  },
  {
    name: 'HAL/S',
    year:0
  },
  {
    name: 'Halide (programming language)',
    year:0
  },
  {
    name: 'IBM Basic assembly language',
    year:0
  },
  {
    name: 'IBM BASIC',
    year:0
  },
  {
    name: 'IBM HA-Script',
    year:0
  },
  {
    name: 'J',
    year:0
  },
  {
    name: 'JAL',
    year:0
  },
  {
    name: 'KRL',
    year:0
  },
  {
    name: 'K',
    year:0
  },
  {
    name: 'KRL (KUKA Robot Language)',
    year:0
  },
  {
    name: 'LIS',
    year:0
  },
  {
    name: 'L',
    year:0
  },
  {
    name: 'LiveScript',
    year:0
  },
  {
    name: 'LiveCode',
    year:0
  },
  {
    name: 'ML',
    year:0
  },
  {
    name: 'MAD',
    year:0
  },
  {
    name: 'M4',
    year:0
  },
  {
    name: 'M (alternative name for the MUMPS programming language)',
    year:0
  },
  {
    name: 'Nice',
    year:0
  },
  {
    name: 'NPL',
    year:0
  },
  {
    name: 'NASM',
    year:0
  },
  {
    name: 'OBJ2',
    year:0
  },
  {
    name: 'OAK',
    year:0
  },
  {
    name: 'Oxygene',
    year:0
  },
  {
    name: 'OPS5',
    year:0
  },
  {
    name: 'PDL',
    year:0
  },
  {
    name: 'Peral',
    year:0
  },
  {
    name: 'p',
    year:0
  },
  {
    name: 'ParaSail (programming language)',
    year:0
  },
  {
    name:'Q (equational programming language)',
    year:0
  },
  {
    name:'Q# (Microsoft programming language)',
    year:0
  },
  {
    name:'QPL',
    year:0
  },
  {
    name:'REBOL',
    year:0
  },
  {
    name:'R++',
    year:0
  },
  {
    name:'RuneScript',
    year:0
  },
  {
    name:'S-LAN',
    year:0
  },
  {
    name:'S-PLUS',
    year:0
  },
  {
    name:'SQL',
    year:0
  },
  {
    name:'Stackless Python',
    year:0
  },
  {
    name:'Transcript',
    year:0
  },
  {
    name:'TypeScript',
    year:0
  },
  {
    name:'T-SQL',
    year:0
  },
  {
    name:'Ubercode',
    year:0
  },
  {
    name:'Unicon',
    year:0
  },
  {
    name:'UnrealScript',
    year:0
  },
  {
    name:'Visual Basic',
    year:0
  },
  {
    name:'Visual Basic.Net',
    year:0
  },
  {
    name:'Visual J++',
    year:0
  },
  {
    name:'WATFIV, WATFOR',
    year:0
  },
  {
    name:'Wolfram Language',
    year:0
  },
  {
    name:'WebQl',
    year:0
  },
  {
    name:'XPL',
    year:0
  },
  {
    name:'XBL',
    year:0
  },
  {
    name:'XOD (programming language)',
    year:0
  },
  {
    name:'X++',
    year:0
  },
  {
    name:'YQL',
    year:0
  },
  {
    name:'Yorick',
    year:0
  },
  {
    name:'ZPL',
    year:0
  },
  {
    name:'Z++',
    year:0
  },
  {
    name:'ZetaLisp',
    year:0
  }
   
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class App2 extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search Language",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

export default App2;