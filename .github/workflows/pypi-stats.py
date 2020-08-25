import argparse
import json
import time

import pypistats


def make_metric(package, period, count):
    return {
        'MetricName': 'pypi-install-count',
        'Value': count,
        'Unit': 'Count',
        'Timestamp': time.time(),
        'Dimensions': [
            {
                'Name': 'package',
                'Value': package,
            },
            {
                'Name': 'period',
                'Value': period,
            },
        ],
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--packages', nargs='+', required=True)
    parsed = parser.parse_args()

    metrics = []
    for package in parsed.packages:
        pypi_data = json.loads(pypistats.recent(package, format='json'))['data']
        metrics.append(make_metric(package, 'last_day', pypi_data['last_day']))
        metrics.append(make_metric(package, 'last_week', pypi_data['last_week']))
        metrics.append(make_metric(package, 'last_month', pypi_data['last_month']))

        overall_data = json.loads(pypistats.overall(package, format='json'))['data']
        total_downloads = sum(val['downloads'] for val in overall_data)
        metrics.append(make_metric(package, 'all_time', total_downloads))

    print(json.dumps(metrics))


main()
