import pytest


@pytest.mark.usefixtures('db_setup')
async def test_fixture_test_client_get(app, test_cli):
    """
    GET request
    """
    resp = await test_cli.get('/api/v1/users/test')
    assert resp.status == 200
    resp_json = await resp.json()
    assert resp_json == {'result': 'OK'}

    resp = await test_cli.get('/api/v1/signin')
    assert resp.status == 200
    resp_json = await resp.json()
    assert resp_json == {'hello': 'api'}
