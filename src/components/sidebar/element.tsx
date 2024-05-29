import { FileBarChart, FilePieChart, Info, LayoutDashboard, LogOut, UserPlus } from "lucide-react";

export const element = [
    {
        icon:  <FileBarChart/>,
        name: 'Inicio',
        layoutRoute:'/home/begin'
        
    },
    {
        icon:  <LayoutDashboard/>,
        name: 'Painel',
        layoutRoute:'/home/dashboard'
    },
    {
        icon:  <UserPlus/>,
        name: 'Adicionar',
        layoutRoute:'/home/more'
    },
    {
        icon:  <FilePieChart/>,
        name: 'Atividade',
        layoutRoute:'/home/dashboard'
    },
]

export const elementBottom= [
    {
        icon:  <Info/>,
        name: 'Informação',
        layoutRoute:'/home/dashboard'
    },
    {
        icon:  <LogOut/>,
        name: 'Sair',
        layoutRoute:'/home/dashboard'
    }
]