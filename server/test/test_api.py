class TestApi:
    def test_root(self, app):
        res = app.get("/")
        assert res.data.decode("utf-8") == "OK"
        assert res.status_code == 200
