/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Bateaux: undefined;
  Details:any;
  Restaurants:undefined;
  Recettes:undefined;
  Homepage:undefined;
  Products:undefined;
  ProductListScreen:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

interface ProductInterface {
  
    id:number,
    name:string,
    category:number,
    price:number,
    unit:string,
    availability:boolean,
    sale:boolean,
    discount:number,
    comments:string,
    owner:string

}

export interface StateInterface {
  products: ProductInterface[]
}

export interface ActionInterface{
  type: string;
  payload: unknown;
}