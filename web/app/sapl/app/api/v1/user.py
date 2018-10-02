from sanic import Blueprint
from sanic import response

user = Blueprint('users', url_prefix='/users')


@user.route('/test')
async def test_api(request):
    return response.json(
        {'result': 'OK'},
        status=200
    )
