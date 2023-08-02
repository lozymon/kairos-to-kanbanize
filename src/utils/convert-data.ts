import { List } from '../interface/list.interface';

export function convertData(inputData: string): List[] {
    if (!inputData) return [];

    const regex =
        /^(seg|ter|qua|qui|sex|sáb|dom),\s(\d{2})\sde\s(jan|fev|mar|abr|maio|jun|jul|ago|set|out|nov|dez)\sde\s(\d{4})\t(\d{2}):(\d{2})/gi;

    return inputData
        .split('\n')
        .map((item) => item.trim())
        .map((item) => [...item.matchAll(regex)])
        .filter((item) => item.length > 0)
        .map((item) => item[0])
        .map((item) => {
            const [str, dayName, day, month, year, hore, minutes] = item;

            const calcHore = parseInt(hore);
            const calcMin = parseInt(minutes) / 60;
            const calc = (calcHore + calcMin).toFixed(2);
            const disabled = hore + ':' + minutes === '00:00';

            return {
                selected: !disabled,
                disabled,
                str,
                dayName,
                day,
                month,
                year,
                hore,
                minutes,
                calcHore,
                calcMin,
                calc,
            };
        });
}
