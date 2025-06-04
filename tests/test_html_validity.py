import os
import unittest
from html.parser import HTMLParser

class TestHTMLValidity(unittest.TestCase):
    def test_index_html_parses(self):
        index_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "index.html"))
        parser = HTMLParser()
        with open(index_path, encoding="utf-8") as f:
            parser.feed(f.read())
        parser.close()
        self.assertTrue(True)

if __name__ == "__main__":
    unittest.main()
