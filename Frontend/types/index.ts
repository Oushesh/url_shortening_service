import { RouteLoader } from "next/dist/client/route-loader";

export enum OpenAIModel {
  DAVINCI_TURBO = "gpt-3.5-turbo"
}


export interface ChatMessage {
  //role: RouteLoader;
  role: "user" | "assistant";
  content: string | JSX.Element;
}

export interface Message {
  //role: RouteLoader;
  role: "user" | "assistant";
  content: string | JSX.Element;
}

export type Role = "assistant" | "user";


//This part deals with the pricing plans and the
//components avaialble for each plan. Each and
//everyone of them

export interface Product {
  id: string /* primary key */;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
}

export interface ProductWithPrice extends Product {
  prices?: Price[];
}

export interface Price {
  id?: string /* primary key */;
  product_id?: string /* foreign key to products.id */;
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  interval_count?: number;
  trial_period_days?: number | null;
  products?: Product;
  interval?: number
}

export interface UserDetails 
{
  id: string /* primary key */;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
}

export interface Subscription {
  id: string /* primary key */;
  user_id: string;
  price_id?: string /* foreign key to prices.id */;
  quantity?: number;
  cancel_at_period_end?: boolean;
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;
  cancel_at?: string;
  canceled_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
}