import axios from "axios";
import { ApiService } from "data/services/Api.Service";
import { Root } from "data/types/weather";
import { useState } from "react";

export function useProdutos() {
    const [weather, setWeather] = useState([] as Root[]);

    async function getWeather() {
        const response = await ApiService.get<Root[]>("/product");

        setWeather(response.data);
    }

    return {
        weather,
        getWeather,
    };
}
