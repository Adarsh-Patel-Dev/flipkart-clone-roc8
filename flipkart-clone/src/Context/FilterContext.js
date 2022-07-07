import { createContext, useContext, useReducer } from "react";


const FilterContext = createContext();
const useFilter = ()=>useContext(FilterContext)

function FilterProvider({children}){

    function filterReducer(state, action){
        switch (action.type) {
            case "SMALL":
                return {...state, size:{...state['size'],small:!state.size.small}} 
                
            case "MEDIUM":
                return {...state, size:{...state['size'],medium:!state.size.medium}} 
                
            case "LARGE":
                return {...state, size:{...state['size'],large:!state.size.large}} 
            
            case "X-LARGE":
                return {...state, size:{...state['size'],xlarge:!state.size.xlarge}} 
                
            case "NIKE":
                return {...state, brands:{...state['brands'],nike:!state.brands.nike}} 
                
            case "PUMA":
                return {...state, brands:{...state['brands'],puma:!state.brands.puma}} 
                
            case "ADIDAS":
                return {...state, brands:{...state['brands'],adidas:!state.brands.adidas}} 
                
            case "MEN":
                return {...state, gender:{...state['gender'],men:!state.gender.men}} 
                
            case "WOMEN":
                return {...state, gender:{...state['gender'],women:!state.gender.women}} 
                
            case "KIDS":
                return {...state, gender:{...state['gender'],kids:!state.gender.kids}} 
                
            case "SORT_BY_PRICE":
                return {...state, sortByPrice:action.payload} 
            
            case "CLEAR_FILTER":
                return {size:{
                    small:false,
                    medium:false,
                    large:false,
                    xlarge:false,
                },
                brands:{
                    nike:false,
                    puma:false,
                    adidas:false,
                },
                gender:{
                    men:false,
                    women:false,
                    kids:false,
                },
               sortByPrice :false,
            } 
               
        
            default:
                break;
        }

    }

    const [ state, filterDispatch ] = useReducer( filterReducer, {
        size:{
            small:false,
            medium:false,
            large:false,
            xlarge:false,
        },
        brands:{
            nike:false,
            puma:false,
            adidas:false,
        },
        gender:{
            men:false,
            women:false,
            kids:false,
        },
        sortByPrice :false,
    })
    return(
        <FilterContext.Provider value={{ state, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

export { useFilter, FilterProvider}