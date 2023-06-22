from pymongo import MongoClient

# Replace <username>, <password>, and <cluster_uri> with your own values
username = 'Cluster43596'
password = 'TWB8eXFHRER6'
cluster_uri = 'cluster43596.2lkinc9.mongodb.net'

# Create the MongoDB client
client = MongoClient(f'mongodb+srv://{username}:{password}@{cluster_uri}/test?retryWrites=true&w=majority')

# Access a specific database
db = client['your_database_name']

# Access a specific collection
collection = db['your_collection_name']

# Perform database operations
# Example: Insert a document
document = {'name': 'John', 'age': 30}
collection.insert_one(document)
