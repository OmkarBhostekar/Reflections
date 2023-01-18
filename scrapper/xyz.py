from bs4 import BeautifulSoup
import requests
    
def scraper(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    pictures = soup.find_all('picture')
    if(len(pictures) > 0):
        print(pictures[0])
    
articles = [
    'https://medium.com/illumination/algorithms-explained-86ed6109f59c',
    # 'https://medium.com/co-designing-with-communities/the-untapped-potential-of-bodegas-a-civic-forum-ecf7996f81f9',
    # 'https://medium.com/cryptosheets/coinmetrics-and-coindar-now-available-in-cryptosheets-684c0a82faed'
]
for article in articles:
    scraper(article)

