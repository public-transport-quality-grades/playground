import datetime

#departures = ["5:55", "6:35", "7:15"]
#interval = ["6:00", "7:00"]
#departures = ["09:01", "09:02", "10:01", "10:02", "11:00", "11:05", "12:00", "12:05", "13:00", "13:05"]
departures = ["09:01", "09:02", "10:01", "10:02"]
interval = ["09:00", "11:00"]

def parse_time(time: str):
    time_split = time.split(":")
    hours, minutes = (int(time_split[0]), int(time_split[1]))
    return datetime.timedelta(seconds=hours*3600+minutes*60)

a, b = tuple(map(parse_time, interval))
all_departure_times = list(map(parse_time, departures))
departure_times = list(filter(lambda t: t > a and t <= b, all_departure_times))

# if there's just one element, duplicate it to use it as start and end
if len(departure_times) == 1:
    departure_times += departure_times


def get_departure_after_interval():
    fictional_next_departure = departure_times[0] + (b - a)
    departures_after_end = list(filter(lambda t: t > b, all_departure_times))
    if not departures_after_end:
        return fictional_next_departure
    actual_next_departure = min(departures_after_end)
    return min(fictional_next_departure, actual_next_departure)


def calc_delta(i):
    if i == len(departure_times) - 1:
        next_dep = get_departure_after_interval()
        print(f"next departure after observed interval: {next_dep}")
        return ((next_dep - departure_times[-1]).seconds)**2 - ((next_dep - b).seconds)**2
    elif i == 0:
        return ((departure_times[0] - a).seconds)**2
    else:
        return ((departure_times[i+1] - departure_times[i]).seconds)**2


def calculate_interval():
    delta_sum = sum(map(calc_delta, range(len(departure_times))))
    return float(delta_sum) / (b - a).seconds 


if __name__ == "__main__":
    print(departures)
    print(f"interval: {a} - {b}")
    takt = calculate_interval() / 60
    print(f"takt: {takt} minutes")